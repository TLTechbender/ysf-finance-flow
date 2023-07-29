

/**
 * Cos I didn't want to choke myself keeping up with similar looking HTML,
 * I decided to render the HTML using javascript
 */
const latestPosts = document.querySelector(".latest-posts");
const postContents = [

    {
        postMainPicture:"../assets/images/blog_images/macbook-angled.png",
        postPassport:"../assets/images/blog_images/blog-passport.png",
        postLink:"./blog-post.html",
        postHeadingText:"Cryptocurrency Explained With Pros and Cons for Investment",
        postDescription:"Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
        postAuthor:"alex turner",
        postDate:"august 2, 2021"

    },

    {
        postMainPicture:"../assets/images/blog_images/macbook-angled.png",
        postPassport:"../assets/images/blog_images/blog-passport.png",
        postLink:"./blog-post.html",
        postHeadingText:"Cryptocurrency Explained With Pros and Cons for Investment",
        postDescription:"Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
        postAuthor:"alex turner",
        postDate:"august 2, 2021"

    },

    {
        postMainPicture:"../assets/images/blog_images/macbook-angled.png",
        postPassport:"../assets/images/blog_images/blog-passport.png",
        postLink:"./blog-post.html",
        postHeadingText:"Cryptocurrency Explained With Pros and Cons for Investment",
        postDescription:"Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
        postAuthor:"alex turner",
        postDate:"august 2, 2021"

    },

    {
        postMainPicture:"../assets/images/blog_images/macbook-angled.png",
        postPassport:"../assets/images/blog_images/blog-passport.png",
        postLink:"./blog-post.html",
        postHeadingText:"Cryptocurrency Explained With Pros and Cons for Investment",
        postDescription:"Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
        postAuthor:"alex turner",
        postDate:"august 2, 2021"

    },

    {
        postMainPicture:"../assets/images/blog_images/macbook-angled.png",
        postPassport:"../assets/images/blog_images/blog-passport.png",
        postLink:"./blog-post.html",
        postHeadingText:"Cryptocurrency Explained With Pros and Cons for Investment",
        postDescription:"Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
        postAuthor:"alex turner",
        postDate:"august 2, 2021"

    },

    {
        postMainPicture:"../assets/images/blog_images/macbook-angled.png",
        postPassport:"../assets/images/blog_images/blog-passport.png",
        postLink:"./blog-post.html",
        postHeadingText:"Cryptocurrency Explained With Pros and Cons for Investment",
        postDescription:"Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
        postAuthor:"alex turner",
        postDate:"august 2, 2021"

    },

 


]



/**
 * The Logic to render the HTML
 */

postContents.forEach((postContent)=>{

    const div = document.createElement('div');
    div.setAttribute("class", "latest-post");

    divContent =

    `
    
    <picture>
    <img src="${postContent.postMainPicture}" alt="Macbook Pro">
    </picture>
    <div class="post-text">
    <p>featured</p>
    <h2><a href="${postContent.postLink}">${postContent.postHeadingText}</a></h2>
    <p>${postContent.postDescription}</p>
    <div>
        <picture><img src="${postContent.postPassport}" alt="passport photograph"></picture>
        <span>
            <p>${postContent.postAuthor}</p>
            <p>${postContent.postDate}</p>
        </span>
    </div>
    </div>
    `;

    div.innerHTML = divContent;
    latestPosts.appendChild(div);



});



