class User < ApplicationRecord

    attr_reader :password

    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 8, allow_nil: true }
    
    has_many :tasks,
        class_name: :Task,
        foreign_key: :assignee_id
    
    has_many :task_lists,
        class_name: :TaskList,
        foreign_key: :owner_id
    
    has_many :projects,
        class_name: :Project,
        foreign_key: :owner_id

    has_and_belongs_to_many :teams
    
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        self.save!
        self.session_token
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    private
    
    def generate_session_token
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

    def generate_unique_session_token
        self.session_token = generate_session_token

        while (User.find_by(session_token: self.session_token))
            self.session_token = generate_session_token
        end

        self.session_token
    end

    



end
