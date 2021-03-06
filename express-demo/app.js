const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
{ id: 1, name: 'course1' }
{ id: 2, name: 'course2' }
{ id: 3, name: 'course3' }
}];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);

    if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
    }

    // 400 Bad Request
    res.status(400).send('Name is required and should be minimum 3 characters')
    return;
    }



    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id), (req, res) => {
    const course
    // Look up the course
    // If not existing return 404
    
    // Validate
    // If invalid, return 400 = Bad Request

    // Update courses
    course.name = req.body,name;
    res.send(course);
    // Return the updated course
});

// Delete
const index = courses.indexOf(course);
courses.splice(course);
});