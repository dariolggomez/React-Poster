import { redirect } from "react-router-dom";
export async function fetchPosts() {
    const response = await fetch("http://localhost:8080/posts");
    const data = await response.json();
    return data.posts;
}

export async function sendPost({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

    return redirect('/');
}

export async function openPostDetails({params}){
  const response = await fetch('http://localhost:8080/posts/' + params.id)
  const resData = await response.json();
  return resData.post;
}