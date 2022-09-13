import { useFetch } from './useFetch';

let baseUrl = "https://jsonplaceholder.typicode.com";

function Stu10And2() {

    const { data, fetchUrl } = useFetch(baseUrl, "users");
    const { data: userData } = useFetch(baseUrl, "users");
    const { data: postData } = useFetch(baseUrl, "posts");

    return (
        <div>
            <h1>useFetch</h1>
            <button onClick={() => fetchUrl('users')}>Users</button>
            <button onClick={() => fetchUrl('posts')}>Posts</button>
            <button onClick={() => fetchUrl('todos')}>Todos</button>
            <br />
            <textarea style={{ width: 300, height: 300 }} value={data && JSON.stringify(data, null, 2)}> </textarea>

            <br /><br />
            <h1>User</h1>
            {userData && <pre> {JSON.stringify(userData[0], null, 2)}</pre>}

            <br /><br />
            <h1>Post</h1>
            {postData && <pre> {JSON.stringify(postData[0], null, 2)}</pre>}

        </div>
    )
}

export default Stu10And2;``