# Go-Green
post: /users
request body expects "user" property in the format {"username": <String>, "password": <String>}

get: /recyclingHistory
request headers expects "name" property which is a string, and "Content-Type" of "application/json"

post: /recyclingHistory
request body expects "name" property which is a string, and a "history" property in the format {"date": <Date>, "amountPaid": <Number>, "amountRecycled": <Number>}