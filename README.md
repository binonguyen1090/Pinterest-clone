
# B-interested

![apple-touch-icon](https://user-images.githubusercontent.com/38637651/78306775-094de500-74f9-11ea-95f3-2e21d84e8817.png)
### Binterested is a single-page application inspired by Pinterest. Users can create boards, collections that store images, which can be uploaded, and allow images to be viewed on a feed. 

## [Live site here](https://binterest.herokuapp.com/)


## Technologies

* Ruby on Rails
* React/ Redux
* PostgreSQL database
* AWS for hosting images


## Features
* User authentication
* User profile feed with user's information and boards, pins.
* Create and edit boards
* Upload and delete pins
* Home feed with responsive masonry layout
* Modal forms

![alt text](https://github.com/binonguyen1090/Pinterest-clone/blob/master/app/assets/images/edituser.png)

## Modals
The majority the forms on Binterested are implemented using modals. Furthermore, the rendering of the login and signup modals were modified to prevent closing of the modal in the splash page and to display only one form at all times.

![alt text](https://github.com/binonguyen1090/Pinterest-clone/blob/master/app/assets/images/modal.png)

```javascript
function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;

  switch (modal.modal) {
    // switch (modal) {
    case "Log in":
      component = <LoginFormContainer />;
      break;
    case "Sign up":
      component = <SignupFormContainer />;
      break;
    case "Create Board":
      component = <CreateBoardFormContainer />;
      break;
    case "Create Pin":
      component = <CreatePinFormContainer />;
      break;
    case "Edit Board":
      component = <EditBoardFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

```

## Responsive CSS Masonry Layout
CSS grid was used to implement the mosaic-like appearance of a Pinterest feed. Image sizes and columns are adjusted based on the size of the screen, allowing for a more visually appealing user interface.

![alt text](https://github.com/binonguyen1090/Pinterest-clone/blob/master/app/assets/images/reponsivecss.png)

## Future Implementations
* Followers for boards and users
* Infinity scrolling
* Search bar

