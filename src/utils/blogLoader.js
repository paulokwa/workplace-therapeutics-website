export async function getBlogPosts() {
    const modules = import.meta.glob('/src/content/blog/*.md', { query: '?raw', import: 'default' });
    const posts = [];

    for (const path in modules) {
        const content = await modules[path]();
        const { attributes, body } = parseFrontMatter(content);
        const slug = path.split('/').pop().replace('.md', '');
        posts.push({
            slug,
            ...attributes,
            body
        });
    }

    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getBlogPost(slug) {
    try {
        const modules = import.meta.glob('/src/content/blog/*.md', { query: '?raw', import: 'default' });
        const matchPath = Object.keys(modules).find(path => path.includes(`${slug}.md`));

        if (!matchPath) throw new Error('Post not found');

        const content = await modules[matchPath]();
        const { attributes, body } = parseFrontMatter(content);

        return {
            slug,
            ...attributes,
            body
        };
    } catch (e) {
        return null;
    }
}

function parseFrontMatter(content) {
    const frontMatterRegex = /^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/;
    const match = frontMatterRegex.exec(content);

    if (!match) {
        return { attributes: {}, body: content };
    }

    const frontMatterBlock = match[1];
    const body = match[2];
    const attributes = {};

    frontMatterBlock.split('\n').forEach(line => {
        const parts = line.split(':');
        if (parts.length >= 2) {
            const key = parts[0].trim();
            let value = parts.slice(1).join(':').trim();
            // Remove quotes if present
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }
            attributes[key] = value;
        }
    });

    return { attributes, body };
}
