class PostsController < ApplicationController
 
  # GET method to get all posts from database
  def index
    @posts = Post.all
  end
 
  # GET method to get a post by id
  def show
    @post = Post.find(params[:id])
  end
 
  # GET method for the new post form
  def new
    @post = Post.new
  end
 
  # POST method for processing form data
  def create
    @post = Post.new(post_params)
    if @post.save
      flash[:notice] = 'post added!'
      redirect_to root_path
    else
      flash[:error] = 'Failed to edit post!'
      render :new
    end
  end
 
   # GET method for editing a post based on id
  def edit
    @post = Post.find(params[:id])
  end
 
  # PUT method for updating in database a post based on id
  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(post_params)
      flash[:notice] = 'post updated!'
      redirect_to root_path
    else
      flash[:error] = 'Failed to edit post!'
      render :edit
    end
  end
 
  # DELETE method for deleting a post from database based on id
  def destroy
    @post = Post.find(params[:id])
    if @post.delete
      flash[:notice] = 'post deleted!'
      redirect_to root_path
    else
      flash[:error] = 'Failed to delete this post!'
      render :destroy
    end
  end
 
  # we used strong parameters for the validation of params
  def post_params
    params.require(:post).permit(:title, :description)
  end
 
end