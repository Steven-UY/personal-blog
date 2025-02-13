import fs from 'fs';
import matter from 'gray-matter';


export default function getPostMetadata(basePath: string){
    const folder = basePath + '/';
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter(file => file.endsWith('.md'));

    // get file data using gray-matter
    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8');
        const matterResult = matter(fileContents);
        return{
            title: matterResult.data.title,
            date: matterResult.data.date,
            slug: filename.replace('.md', ''),
            hidden: matterResult.data.hidden,
            description: matterResult.data.description,
            link: matterResult.data.link,

        }
    })
    return posts;
}

