import { redirect } from "react-router-dom";
export async function loader() {
    const response = await fetch("http://localhost:8080/posts");
    const data = await response.json();
    return data.posts;
}

export async function action({request}) {
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