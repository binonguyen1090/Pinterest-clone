
# B-interested

![apple-touch-icon](https://user-images.githubusercontent.com/38637651/78306775-094de500-74f9-11ea-95f3-2e21d84e8817.png)

### Binterested is a single-page application inspired by Pinterest. Users can create boards, collections that store images, which can be uploaded, and allow images to be viewed on a feed. 

## [Live site here](https://binterest.herokuapp.com/)


## Technologies

* Ruby on Rails
* React/ Redux
* PostgreSQL database
* AWS for hosting images
* JBuilder
* JavaScript
* HTML
* CSS
* Heroku
* Amazon Storage (AWS S3)

## Features
* User authentication
* User profile feed with user's information and boards, pins.
* Create and edit boards
* Upload and delete pins
* Home feed with responsive masonry layout
* Modal forms

<img width="1029" alt="edituser" src="https://user-images.githubusercontent.com/38637651/80107397-ddd67d00-852f-11ea-9932-90f3b66d7f11.png">

## Modals
The majority the forms on Binterested are implemented using modals. Furthermore, the rendering of the login and signup modals were modified to prevent closing of the modal in the splash page and to display only one form at all times.
<img width="867" alt="modal" src="https://user-images.githubusercontent.com/38637651/80107375-d616d880-852f-11ea-8e88-ed822c0d2726.png">

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

<img width="1095" alt="reponsivecss" src="https://user-images.githubusercontent.com/38637651/80107101-89330200-852f-11ea-8598-adc8b16ed72b.png">

## Search Function
<img width="1317" alt="Screen Shot 2020-04-23 at 7 00 41 AM" src="https://user-images.githubusercontent.com/38637651/80107628-2d1cad80-8530-11ea-84ff-f93ad5772a2a.png">

## Future Implementations
* Saving pin
* Infinity scrolling


