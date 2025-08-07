import React, { useEffect } from "react";
import "./coursestudy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";
import { FaClock, FaChalkboardTeacher, FaBookOpen } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const CourseStudy = ({ user }) => {
  const params = useParams();
  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

  useEffect(() => {
    fetchCourse(params.id);
  }, []);

  return (
    <div className="course-study-container">
      {course && (
        <>
          <div className="course-hero">
            <div className="course-image-wrapper">
              <img 
                src={`${server}/${course.image}`} 
                alt={course.title}
                className="course-hero-image"
              />
            </div>
            <div className="course-header">
              <h1 className="course-title">{course.title}</h1>
              <div className="course-meta">
                <div className="meta-item">
                  <FaChalkboardTeacher className="meta-icon" />
                  <span>{course.createdBy}</span>
                </div>
                <div className="meta-item">
                  <FaClock className="meta-icon" />
                  <span>{course.duration} weeks</span>
                </div>
              </div>
            </div>
          </div>

          <div className="course-content">
            <div className="course-description">
              <h2 className="section-title">
                <FaBookOpen className="section-icon" />
                Course Description
              </h2>
              <p>{course.description}</p>
            </div>

            <Link to={`/lectures/${course._id}`} className="lectures-button">
              View All Lectures
              <HiOutlineArrowNarrowRight className="button-icon" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CourseStudy;