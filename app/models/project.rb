class Project < ActiveRecord::Base
  has_many :tasks

  accepts_nested_attributes_for :tasks, :reject_if => :all_blank, :allow_destroy => true
end
