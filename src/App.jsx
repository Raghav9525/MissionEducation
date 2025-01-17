import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Course from "./components/Course";
import CourseDetails from "./components/CourseDetails";
import Contact from "./components/Contact";
import About from "./components/About";
import ImageGallery from "./components/ImageGallery";
import MyReactModal from "./components/MyReactModal";
import { ModalProvider, useModal } from "./components/ModalContext";
import DirectorPage from "./components/DirectorPage";


function App() {
  return (
    <ModalProvider>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/course/:course_type" element={<Course />} />
          <Route path="/document" element={<Document />} />

          
          <Route path="/course_details/:course_name" element={<CourseDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/modal" element={<MyReactModal />} />
          <Route path="/director" element={<DirectorPage />} />



          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>

        <Footer />
        <GlobalModal />

      </Router>
    </ModalProvider>
  );
}


// Place the modal here to ensure it opens globally
const GlobalModal = () => {
  const { isModalShown, hideModal } = useModal();

  return (
    isModalShown && <MyReactModal onHide={hideModal} />
  );
};

export default App;
