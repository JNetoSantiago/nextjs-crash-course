function Post (props) {
    return (
        <li className="post">
            <p>{ props.author } - { props.body }</p>
        </li>
    )
}

export default Post;