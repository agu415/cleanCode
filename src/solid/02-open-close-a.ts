import { PhotosService, PostService, TodoService } from './02-open-close-b';
import { HttpClient } from './02-open-close-c';

(async () => {

    const httpclient = new HttpClient();

    const todoService = new TodoService( httpclient );
    const postService = new PostService( httpclient );
    const photosService = new PhotosService( httpclient );

    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();
    
    
    console.log({ todos, posts, photos });
    

})();