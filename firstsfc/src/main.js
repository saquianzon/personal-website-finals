import { createApp } from 'vue'
import App from './App.vue'
import CommentForm from './components/CommentForm.vue'
import Comment from './components/Comment.vue'
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import IT from './components/IT.vue';
import Goals from './components/Goals.vue';
import Gallery from './components/Gallery.vue';


const app = createApp(App)
app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.component('navbar', Navbar)
app.component('home', Home)
app.component('about', About)
app.component('it', IT)
app.component('goals', Goals)
app.component('gallery', Gallery)
app.mount('#app')
