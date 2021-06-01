import React, { useState, useEffect } from 'react';
import TrellisModal from "./ModalTrellis";
import CreatePost from "./CreatePost";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import API from '../utils/API';
// import { report } from '../../../controllers/api';

export default function TrellisPosts() {
    console.log()

    const [showCreate, setShowCreate] = useState(false);
    const [posts, setPosts] = useState([]);
    const [PostInfo, setPostInfo] = useState();
    // const [trellisComments, setTrellisComments] = useState([]);

    console.log(posts);

    useEffect(() => {
        if (!posts) {
            return;
        }
        else {
            API.getTrellisPosts()
                // API.getTrellisComments()
                .then(res => {
                    console.log(res)
                    setPosts(res.data)
                    // setTrellisComments(res.data)
                })
                .catch(err => console.log(err));
        }
    }, []);

    // useEffect for the showCreate state for the create post modal
    useEffect(() => {

    }, [showCreate])

    // useEffect for adding a new post to the post list without refreshing page
    const updatePosts = () => {
        API.getTrellisPosts()
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => console.log(err));

    }

    const creatingPost = async (e) => {
        e.preventDefault();

        if (PostInfo.title && PostInfo.body) {
            const newPost = await API.createTrellisPost({
                title: PostInfo.title,
                body: PostInfo.body
            })
            updatePosts()
        }
    }
    // var posts = props.posts;
    // var comments = props.comments;

    return (
        <div>
            <div className="trellis-posts">
                <div className="text-center">
                    <button onClick={() => setShowCreate(!showCreate)} className="create-post-btn m-1 rounded" type="button" data-bs-toggle="modal" data-bs-target="#createPost"><FontAwesomeIcon icon={faPlusSquare} className="fa-md" /> Create Post</button>
                    <CreatePost
                        PostInfo={PostInfo}
                        setPostInfo={setPostInfo}
                        setShowCreate={setShowCreate}
                        creatingPost={creatingPost}
                    />
                </div>
                {posts && posts.map(post => {
                    return (
                        // <div className="trellis-item" key={post.id}>
                        // <h2 className="trellis-header" id={"heading" + post.id}>
                        <>
                            <button className="trellis-button rounded" type="button" data-bs-toggle="modal" data-bs-target={"#trellisModal" + post.id}>
                                <ul className="nav justify-content-start">
                                    <li className="nav-item fs-5">{post.title}</li>
                                </ul>
                                <ul className="nav justify-content-end">
                                    <li className="nav-item read fs-5">Read <FontAwesomeIcon icon={faAngleDoubleRight} className="fa-lg open-post" /></li>
                                </ul>
                            </button>
                            <TrellisModal
                                id={post.id}
                                name={post.User.name}
                                title={post.title}
                                body={post.body}
                                createdAt={post.createdAt}
                                comments={post.Trellis_Comments}
                            />

                        </>
                        // </div>
                    )
                })}
            </div>
        </div>)
}

