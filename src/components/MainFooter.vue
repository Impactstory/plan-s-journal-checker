<template>
    <div class="site-footer">
        <div class="content md-layout md-gutter">
            <div class="col md-layout-item md-size-30 md-xsmall-size-100 products">
                <div>

                </div>
                <div>
                    <ul class="contact-links">
                        <li>
                            <a href="mailto:team@ourresearch.org">
                                Feedback
                            </a>
                        </li>
                        <li>
                            <a href="mailto:team@ourresearch.org">
                                Contact
                            </a>

                        </li>
                        <li>
                            <a href="https://github.com/Impactstory/plan-s-journal-checker">
                                Source code
                            </a>

                        </li>
                    </ul>

                </div>
            </div>



            <div class="col md-layout-item md-xsmall-size-100 about">
            </div>

            <div class="col md-layout-item md-size-40 md-xsmall-size-100 about">
                <div class="made-by">
                    Built with <i class="far fa-heart"></i> by <a href="https://ourresearch.org">Our Research</a>, <br> using open data from
                    <a href="https://unpaywall.org">Unpaywall.</a>
                </div>

            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "MainFooter"
    }
</script>

<style scoped lang="scss">
    .site-footer {
        background: #333;
        display: flex;
        padding: 0 40px 40px 40px;
        font-size: 14px;
        margin-top: 100px;

        .content {
            width: 1150px;
            margin: 0 auto;
        }
        .made-by {
            a {
                text-decoration: underline;
            }
        }

        .col {
            color: #fff;
            margin-top: 50px;
            hr {
                margin: 10px 0;
                opacity: .1;
            }
            a {
                color: #fff;
                &:hover {
                    text-decoration: underline;
                    color: #fff;
                }
            }
            &.about {
                div {
                    /*border-bottom: 1px solid #666;*/
                }
            }
        }

        ul.contact-links {
            margin: 0;
            padding: 0;
            li {
                list-style-type: none;
                a {
                    padding: 4px 10px 4px 0;
                    display: block;
                }
                span.text {
                    display: none;
                }
            }
        }


    }


</style>