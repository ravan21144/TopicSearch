import React, { useState } from 'react'
const TopicSearch = () => {
     const topics = [
       { id: 1, topic: "Thermodynamics", category: "Physics" },
       { id: 2, topic: "Thermal Mechanics", category: "Physics" },
       { id: 3, topic: "Vector Algebra", category: "Mathematics" },
       { id: 4, topic: "Vector Analysis", category: "Mathematics" },
       { id: 5, topic: "Electrochemistry", category: "Chemistry" },
     ];

     const [searchedItem, setSearchedItem] = useState("");

     const filteredTopics = topics.filter((topic) =>
       topic.topic.toLowerCase().includes(searchedItem.toLowerCase())
     );

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 20px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "20px" }}>
        Topic Catalogue
      </h1>

      <input
        type="text"
        placeholder="Search for a topic..."
        value={searchedItem}
        onChange={(e) => setSearchedItem(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "14px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "30px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          outline: "none",
        }}
      />

      <div
        id="containerList"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <div
              key={topic.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition:
                  "transform 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <p
                style={{
                  fontSize: "18px",
                  margin: "0 0 6px",
                  fontWeight: "600",
                  color: "#222",
                }}
              >
                {topic.topic}
              </p>
              <p style={{ margin: 0, color: "#555" }}>
                Category: {topic.category}
              </p>
            </div>
          ))
        ) : (
          <p
            style={{
              color: "#999",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            No Topics Found
          </p>
        )}
      </div>
    </div>
  )
}

export default TopicSearch
