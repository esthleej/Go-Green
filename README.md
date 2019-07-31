# Go-Green
post: /users
request body expects "username" and "password" properties which are both strings

get: /recyclingHistory
request headers expects "name" property which is a string, and "Content-Type" of "application/json"

post: /recyclingHistory
request body expects "name" property which is a string, and a "history" property in the format {"date": <Date>, "amountPaid": <Number>, "amountRecycled": <Number>}

post: /login
request body expects "username" and "password" properties which are strings