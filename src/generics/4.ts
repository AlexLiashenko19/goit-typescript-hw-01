type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  }
  
  function createOrUpdateUser<T extends Partial<User>>(initialValues: T) {
    const defaultUser: User = {
        name: '',
        surname: '',
        email: '',
        password: ''
      };
    
      const updatedUser: User = { ...defaultUser, ...initialValues };
      console.log(updatedUser);
    
      return updatedUser;
    }

  createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
  });