import { createApp } from 'vue'
import App from './App.vue'
import CommentForm from './components/CommentForm.vue'
import Comment from './components/Comment.vue'
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';

const app = createApp(App)
app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.component('navbar', Navbar)
app.component('home', Home)
app.mount('#app')
