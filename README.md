# Reactnative Assignment

# Date: 1 Oct 2021
     Task: 
          ‣ Ceate a Counter Application which Increments Counter on Click of a Button.
          ‣ Parent will be class component and child will be functional component.

# Date: 4 Oct 2021
     Task:
          ‣ Ceate a Counter Application which Increments Counter on Click of a Button.
          ‣ Both Parent and Child will be functional component.
          ‣ Parent Component will have state (useState) for the counter and a Button to update Counter Value
          ‣ Child Component will show the count and will receive count from parent as a prop

# Date: 5 Oct 2021
     Task: 
          ‣ Design a basic screen


# Date: 6 Oct 2021

     Task 1: 
          ‣ Design a OTP Screen


     Task 2: 
          Create a text input , text and view alongwith the following steps:-
               ‣ You will input the hex code of a color, and validate that hexcode on submit.
               ‣ If it is a valid hex code convert it into RGB and show its value in the <Text> 
               ‣ Give that RGB value as background color for the <View>
     
     
     Task 3: 
          ‣ Create a image view and show activity indicator in place of image while it is loaded.

     
# Date: 7 Oct 2021
     
     Task: Create a new Screen 

          ‣ Add a button FETCH Data
          ‣ On click present a loader and make an API call 
          ‣ List the data on the same screen, existing button and loader should be removed
          * I have done this with both Class Component and Functional Component
          
          
# Date: 8 Oct 2021
     Task : Create a following 
     
          ‣ Create Stack, Tab and Drawer Navigator (optional)
          ‣ Pass Props and Set it as header title
          
          

# Date: 11 Oct 2021

     Task : Create a following
     
          ‣ Implement WebView, show Activity indicator when WebView is loading
          ‣ Use a switch to show hide the Slider and below slider show the slider value
          ‣ Using api https://reqres.in/api/users?page=1 Render a Flatlist and implement pagination and pull to refresh show activity indicator below the flatlist               when api is being called for the next page, use RefreshControl to show Activity indicator on top in case of pull to refresh
          
# Date: 12 Oct 2021

     Task : Create a UI Design
     
         ‣ Tab Navigation needs to integrated 
         ‣ Home tab must be selected 
         ‣ Icons can be fetched from icons8.com 
         ‣ Sort, filter, wishlist should be touchable
         ‣ No need for back icon
     

# Date: 13 Oct 2021
     Task: Create a sectionlist with the given object.
     
     
# Date: 14 Oct 2021
     Task: 
          Use Alert, intercept Back Press and show the text to confirm go back.
          Use Clipboard to move text from one screen to another.
          
          
          
# Date: 20 Oct 2021
     Task:
          Create a draggable ball as per demonstrated in the attached link
          https://drive.google.com/file/d/1Lb53IDtVZg49MsaY1ZEX_HBJWBLhfHmD/view?usp=sharing

               Create a map view
                    1.  Show your current location 
                    2. Set your current location on drag i.e,  current location functionality in zomato application.
                    3. Create an array of some static coordinates and show marker for those coordinates on map view.
                    
 
 # Date 22 Oct 2021
     Task: 
          Design two screens : One will be a Signup Screen and other one will be Home Screen
               1. Signup Screen UI : https://drive.google.com/file/d/1J-rqvY0JjCsyG-c_ybF53PCpd5IypzHz/view?usp=sharing 

                  On Click of Signup user will navigate to Home screen and details user details like name, email and phone should be saved as a JSON string in                       AsyncStorage which will be later used in home screen.
                  
               2. Home Screen : User's Name and Email will be displayed on the home screen  and there will be one Logout icon on the right of the header. On click                   of Logout an Alert will be shown where user will be asked to logout and will have two options Yes or No. On Click of Yes User will navigate back                   to Signup. Make sure to reset the navigation stack and also clear AsyncStorage

               App Flow : On Initial Launch App will land on Signup Screen, After user signs up if user has not logged out from the app user will navigate to home                           screen always on app relaunch




# Date 26 Oct 2021

     Task
          - Create a Basic Counter App using Redux

          - App should have the ability to increment and decrement the counter.

          - Use Class Components Only.
          
          
# Date 28 Oct 2021
     Task
          - Fetch Data from https://jsonplaceholder.typicode.com/posts from Home Screen and save data in Redux Store.

          - Feed this downloaded data to FlatList inside of the Home Screen.

          - Tap on any FlatList Item and Redirect the app to Details Screen and pass along the tapped item Object.

          - On Details Screen, there will be two TextInputs for body and title, which will be prepopulated with the data from passed object.

          - Create an action to update an item inside of the data array which has been stored inside of the redux store.

          - The changes should reflect on the Home Screen List item, which has been updated.
          
          
 # Date 3 Nov 2021
     Task
          1. Make two screens 

          Notes List Screen (Where all the Notes added will be displayed)
          Add/Edit Notes Screen (Where user will add a new note or edit already added notes)
          Use Stack Navigator for Navigation
          2. Use Mobx for state management
          3. By clicking add notes user will be able to add a new note and that note will be displayed on the Notes List Screen
          4. By Pressing any note on Notes List screen user will be able to edit and update that note on Add/Edit Note Screen
          5. By Long Pressing any note user will get alert to delete that particular not

          Screen example : 
          https://drive.google.com/file/d/10SZ-HCJ9lXfzGnF0MITxfz_mAEnEXFdF/view


# Date 9 Nov 2021
     Task
          Create Three Screens 
               1. Video Player Screen demonstrating Video Player Functionality with progress, pause/play 
               2. Audio Player Screen. Create a Player with pause/play, next/previous functionality
               3. Use Geolocation to fetch user's current location and show marker on the map and any change in user's location should also reflect on the map
               
               
 # Date 12 Nov 2021
     Task
          1. RNV install(0.28.18 or newer)

          2. WebOS IDE install.

          3. Create a demo application in ReNative.

          4. Focus management in Android TV (Take static 4-5 buttons and update its border color & scale its size to 1.2x on focus).

          Reference project: https://drive.google.com/file/d/1EnlUyYWoHW-j8rdFBJmWaHoZ5e0p9U6J/view?usp=sharing
