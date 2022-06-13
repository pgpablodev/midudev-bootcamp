const Header = ({name}) => {
    return <h1>{name}</h1>
}

const Content = ({parts}) => {
    const exarray = []
    parts.map((part) => (
        exarray.push(part.exercises)
    ))
    const sum = exarray.reduce((a,b) => a+b)
    return(
        <div>
            {
                parts.map((part) => (
                    <div key={part.id}>
                        <Part name={part.name} exercises={part.exercises}/>
                    </div>
                ))
            }
            total of {sum} exercises        
        </div>        
    )
}

const Part = ({name,exercises}) => {    
    return <div>{name} {exercises}</div>    
}

const Course = ({name,parts}) => {
    return(
        <div>
            <Header name={name}/>
            <Content parts={parts}/>
        </div>
    )
}

export const Courses = ({courses}) => {
    return(
        <div>
            {
            courses.map((course) => (
                <div key={course.id}>
                    <Course name={course.name} parts={course.parts}/>
                </div>
            ))
            }
        </div>
    )
}