import React from 'react';
import './About.css';
import { useEffect, useState } from 'react';
const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on mount
      }, []);

      useEffect(() => {
        const sections = document.querySelectorAll(".about-container > section");
    
        const observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add the "visible" class when in view
                observer.unobserve(entry.target); // Stop observing after it has been animated
              }
            });
          },
          { threshold: 0.2 } // Trigger animation when 20% of the section is visible
        );
    
        sections.forEach((section) => {
          observer.observe(section); // Observe each section
        });
      }, []);

  const [form, setForm] = useState({name: '', email: '', feedback:''});
  const handleInput = (event) => {
    const {name, value} = event.target;
    setForm({
      ...form, [name] :value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `
    Name: ${form.name},
    Email: ${form.email},
    FeedBack: ${form.feedback}
    `;

    const isConfirm = window.confirm(`Please Check Your detail!!!\n\n${message}`);
    if(isConfirm){
      setForm({
        name: '',
        email: '',
        feedback: ''
      })
    }

    alert('Your feedback was submitted!!');
  };
  
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>Welcome to Tewos Food Delivery</h1>
        <p>Your ultimate solution for fast, reliable, and delicious food delivery in Ethiopia!</p>
      </section>

      <section className="about-details">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            At Tewos Food Delivery, we aim to connect food lovers with their favorite meals 
            from the best restaurants and local kitchens, all with the ease of a few clicks.
          </p>
        </div>

        <div className="about-card">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Fast and reliable delivery service.</li>
            <li>A wide variety of cuisines to satisfy your cravings.</li>
            <li>Affordable delivery rates and exclusive discounts.</li>
            <li>24/7 customer support to assist you anytime.</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Our Story</h2>
          <p>
            Established in 2025, Tewos Food Delivery began with a simple idea: 
            making quality food accessible to everyone in Ethiopia. Today, 
            we’re proud to serve thousands of happy customers daily.
          </p>
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-heading">Meet Our Team</h2>
        <div className="team-grid">
          {/* CEO Card */}
          <div className="team-card">
            <img
              src="https://via.placeholder.com/150"
              alt="CEO"
              className="team-image"
            />
            <h3 className="team-name">Tewodros Shimels</h3>
            <p className="team-title">CEO & Founder</p>
            <p className="team-description">
              Tewodros is the visionary behind Tewos Food Delivery, leading the
              company with passion and innovation to revolutionize the food
              delivery industry in Ethiopia.
            </p>
          </div>

          {/* Manager Card */}
          <div className="team-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Manager"
              className="team-image"
            />
            <h3 className="team-name">John Doe</h3>
            <p className="team-title">Operations Manager</p>
            <p className="team-description">
              John ensures that every operation runs smoothly, ensuring timely
              deliveries and customer satisfaction at every step.
            </p>
          </div>
        </div>
      </section>
      
      <section className="feedback-section">
  <div className="feedback-form" onSubmit={handleSubmit}>
    <div className="form-container">
      <form className="feedback">
        <input 
          type="text" 
          name="name" 
          placeholder="Enter your name" 
          value={form.name} 
          onChange={handleInput} 
          required
          className="form-input"
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Enter your email" 
          value={form.email} 
          onChange={handleInput} 
          className="form-input"
          required
        />
        <textarea 
          name="feedback" 
          placeholder="Enter your message" 
          value={form.feedback} 
          onChange={handleInput} 
          required
          className="form-textarea"
        />
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  </div>
</section>

    </div>
  );
};

export default About;
