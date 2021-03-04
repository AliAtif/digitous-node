const StudentsList = (props) => {
    return (
      <>
        <h1>Students List</h1>
        {props.students.map((student) => {
          return (
            <>
              <p>{student.name}</p>
            
            </>
          );
        })}
      </>
    );
  };
  
  export default StudentsList;
  