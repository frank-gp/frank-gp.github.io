        class sidebarComponent extends HTMLElement {
            constructor() {
                super();

                // Attach a shadow DOM to the component
                this.attachShadow({ mode: 'open' });

                // Create a new div element
                const div = document.createElement('div');

                // Fetch the latest post from the WordPress REST API
                fetch('https://blog.fgp.one/wp-json/wp/v2/posts')
                    .then(response => response.json())
                    .then(posts => {
                        console.log(posts)
                        let template = '';
                        // ========== forEach... ==========
                        //                         // Extract the post data from the response
                        //                         const post = posts[0];
                        //                         const { title, date, _embedded } = post;
                        //                         // const thumbnailUrl = _embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;

                        //                         // Define a template string for the post
                        //                          template = /*html*/`<style>
                        //   img {
                        //     width: 50%;
                        //   }
                        // </style>
                        // <div>
                        //   <img src="${post.jetpack_featured_media_url}" alt="${post.title.rendered}">
                        //   <h2>${title.rendered}</h2>
                        //   <p>${new Date(date).toLocaleDateString()}</p>
                        // </div>`;

                        // ==========  ==========
                        posts.forEach(post => {
                            console.log(post)
                            template += /*html*/`
                            
                            <article>
                                <a href="${post.link}">
                                    <div class="image-container">
                                        <img src="${post.jetpack_featured_media_url}" alt="${post.title.rendered}">
                                        <div class="overlay">
                                            <p class="title">${post.title.rendered}</p>
                                            <p>${new Date(post.date).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                </a>
                            </article>

                            <style>
                                .image-container {
                                    position: relative;
                                    width: 300px;
                                    /* height: 200px; */
                                    aspect-ratio: 16/9;
                                    display: inline-block;

                            
                                }
                            
                                .image-container img {
                                    display: inline-block;
                                    width: 100%;
                                    aspect-ratio: 16/9;
                                    /* height: 100%; */
                                    object-fit: cover;
                                }
                            
                                .overlay {
                                    align-items: center;
                                    background-color: rgba(0, 0, 0, 0.5);
                                    color: white;
                                    display: flex;
                                    flex-direction: column;
                                    height: 100%;
                                    justify-content: center;
                                    left: 0;
                                    opacity: 0;
                                    position: absolute;
                                    top: 0;
                                    transition: opacity 0.3s ease-in-out;
                                    width: 100%;
                                }
                            
                                .overlay .title {
                                    color: #fff;
                                    font-size: 1.5rem;
                                    text-align: center;
                                    transform: translateY(20px);
                                    transition: transform 0.3s ease-in-out;
                                }
                            
                                .image-container:hover .overlay {
                                    opacity: 1;
                                }
                            
                                .image-container:hover .overlay h2 {
                                    transform: translateY(0);
                                }
                            </style>
                            
                            `
                        })

                        // ========== forEach. ==========


                        // Set the innerHTML of the div to the post template
                        div.innerHTML = template;

                        // Append the div to the shadow root
                        this.shadowRoot.appendChild(div);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }

        customElements.define('sidebar-component', sidebarComponent);
