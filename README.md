# Go-Green
ALWAYS send 'Content-Type': 'application/json' header when you send a body
(body generally has to be wrapped in JSON.stringify())

post: /users
request body expects "username" and "password" properties which are both strings

get: /recyclingHistory
request headers expects "username" property which is a string, and "Content-Type" of "application/json"

post: /recyclingHistory
request body expects "username" property which is a string, and a "history" property object in the format {"date": <Date>, "amountPaid": <Number>, "amountRecycled": <Number>}

post: /login
request body expects "username" and "password" properties which are strings