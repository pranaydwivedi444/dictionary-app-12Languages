# dictionary-app-12Languages
12 languages dictionary app
![image](https://user-images.githubusercontent.com/48515987/228823854-b5392aee-4751-4403-870c-9a4088914f8e.png)
# Dictionary App

The Dictionary App is a simple web-based dictionary application that supports 12 different languages. It allows users to search for the meaning of words, with the ability to hear the pronunciation of each word as well.

## Features

- Supports 12 different languages including English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Japanese, Korean, Chinese, and Arabic.
- Implements debouncing for search using an API, reducing the number of API calls and improving search performance.
- Offers audio pronunciation for each word using a built-in audio component.
- Has a responsive UI design that adapts to different screen sizes.

## Technologies Used

- ReactJS for the front-end.
- Material-UI for the UI design and components.
- Axios for handling API requests.
- Dictionary API for word definitions and audio pronunciation.

## Getting Started

1. Clone the repository to your local machine.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the development server.
4. Open your browser and navigate to `http://localhost:3000`.

## How to Use

1. Select a language from the dropdown menu.
2. Enter a word you want to search for.
3. The application will automatically perform a search and display the word definition, along with an audio component for pronunciation.
4. For better performance, the app uses debouncing, which means it waits for a short delay before sending the search request to the API. This reduces the number of requests and makes the search faster.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contributing

Contributions to this project are always welcome! If you find a bug or want to suggest a new feature, please open an issue or submit a pull request.

## Acknowledgements

- Dictionary API for providing the word definitions and audio pronunciation.
- Material-UI for providing the UI design and components.
