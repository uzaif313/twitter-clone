class Tweet < ApplicationRecord
  belongs_to :user
  delegate :gravatar, :display_name, to: :user

  def as_json(options={})
  	super(methods:[:display_name, :gravatar])
  end


end
