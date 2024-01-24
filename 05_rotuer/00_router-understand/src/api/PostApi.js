import posts from "../data/Post.json"

export function getPostList() {
    return posts;
}

export function getPosDetail(postCode){
    return posts.filter(post => post.postCode === parseInt(postCode))[0];
}

export function searchPost(postCode){
    return posts.filter(post => post.postTitle.match(postCode));
}