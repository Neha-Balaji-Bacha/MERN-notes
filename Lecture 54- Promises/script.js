//Promise Creation + States (Pending - Fulfilled / Rejected)
const request = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const num = Math.random();
        if(num<0.5) resolve("No is greater than or equal to 0.5");
        else reject("No is greater than or equal to 0.5");
    },1000);
});
console.log(request); // Promise { <pending> }

//Consuming a Promise (.then, .catch, .finally)
request
.then((resolveMessage)=>{
    console.log({resolveMessage});
})
.catch((rejectMessage)=>{
    console.log({rejectMessage});
})
.finally(()=>{
    console.log("Request is completed");
});

//Promise with Conditional Resolve / Reject
const users = [
{id : 0,
name : "Neha",
},
{id : 1,
name : "Nikita",
},
{id : 2,
name : "Nikhil",
},
{id : 3,
name : "Diksha",
},
{id : 4,
name : "Asha",
},
];
const findUser = new Promise((resolve,reject) => {
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random()*10);
        if(randomIndex < users.length){
            resolve(users[randomIndex]);
        }
        else reject("Not a valid index");
    },1000);
});
findUser
.then((resolveResponse) => {
    console.log({resolveResponse});
})
.catch((rejectMessage) => {
    console.log({rejectMessage});
})
.finally(() => {
    console.log("Request completed");
});

// Callback Hell (Why Promises Were Invented)
const instagramUsers = [
    {userId:0,
        posts:[
            {
                caption : "I'm don",
                imageUrl : "#",
                comments : ["bada don","chota don"],
            },
        ],
    },
    {
        userId : 1,
        posts : [
            { 
               caption: "I'm don",
               imageUrl: "#",
               comments: ["donkey","nice photo dear","don't post"],
            },
        ],
    },
]

function fetchUser(userId, callback) {
  setTimeout(() => {
    if (userId >= instagramUsers.length) callback("invalid userId");
    else callback(null, instagramUsers[userId]);
  }, 1000);
}

function fetchPosts(user, callback) {
  setTimeout(() => {
    if (user?.posts?.length) callback(null, user.posts[0]);
    else callback("User has not posted anything");
  }, 2000);
}

function fetchComments(post, callback) {
  setTimeout(() => {
    if (post?.comments?.length) callback(null, post.comments);
    else callback("This post has no comments");
  }, 2000);
}

fetchUser(giveRandomNumber(instagramUsers.length), (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  fetchPosts(data, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }

    fetchComments(data, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log({data });
    });
  });
}); 

function giveRandomNumber(high) {
  return Math.floor(Math.random() * high);
}

//Same Logic Using Promises
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId >= instagramUsers.length)
        reject("User doesn't exist");
      else resolve(instagramUsers[userId]);
    }, 1000);
  });
}

function fetchPosts(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user?.posts?.length) resolve(user.posts[0]);
      else reject("User has not posted anything");
    }, 1000);
  });
}

function fetchComments(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (post?.comments?.length) resolve(post.comments);
      else reject("Post has no comments");
    }, 1000);
  });
}
//Promise Chaining
fetchUser(giveRandomNumber(instagramUsers.length * 2))
  .then((user) => {
    console.log({ user });
    return fetchPosts(user);
  })
  .then((post) => {
    console.log({ post });
    return fetchComments(post);
  })
  .then((comments) => {
    console.log({ comments });
  })
  .catch((error) => {
    console.error(error);
  });
