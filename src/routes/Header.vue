<template>
    <header>
        <div>
            <div class="head-image">
                <img src="">
            </div>
            <nav class="navigation">
                <ul>
                    <li><router-link :to="{name: 'about'}">Über</router-link></li>
                    <li><router-link  :to="{name: 'positions'}">Positionen</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss" scoped>
    @import './../style/globals.scss';

    header
    {
        background-color: $primary-color;
        padding:0;
        margin:0;


        div.head-image {
            width: 100px;
            height: 100px;
            position: absolute;
            border-radius: 50%;
            border: 1px solid grey;
            overflow: hidden;
            margin-top: 5px;
            margin-left: 5px;
        }

        div {
            width: 100%;
            max-width: $max-width;
            margin: auto;
            display: flex;
            position: relative;
        }

        nav.navigation {
            flex: 1 0 200px;
            ul {
                margin:0;
                padding: 0;
                display: flex;
                justify-content: flex-end;
                list-style: none;
                li {
                    display: block;
                    a {
                        display: block;
                        color: #fff;
                        text-decoration: none;
                        text-transform: uppercase;
                        font-family: $heading-font;
                        padding: 10px 20px;

                        &.router-link-active {
                            text-decoration: underline;
                        }

                        &:hover {
                            text-decoration: underline;
                        }
                    }


                }
            }
        }
    }
</style>