class Api::songController < ApplicationController
  before_action :set_songs, only: [:update, :destroy]

  def index
    render json: Song.all
  end

  def create
    song = Song.new(song_params)
    if song.save
      render json: song
    else
      render json: { errors: song.errors }, status: 422
    end
  end

  def update
    @song.update(complete: !@song.complete)
    render json: @song
  end

  def destroy
    @song.destroy
  end

  private
    def set_song
      @song = song.find(params[:id])
    end

    def song_params
      params.require(:song).permit(:name)
    end
  end
end
