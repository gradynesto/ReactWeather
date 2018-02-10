// function getTempCallBack(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallBack('Philadelphia', function (err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp)
//     }
// });


// function getTempPromise(location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(79);
//             reject('City not found');
//         }, 1000);

//     });
// }

// getTempPromise('Philadelphia').then(function (temp) {
//     console.log('promise success', temp);
// }, function (err) {
//     console.log('promise error', err);
// })



// Challenge Area
function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number')
            resolve(a + b);
        else
            reject('error - bad number');
    });

}

addPromise(3, 2).then(function (temp) {
    console.log('promise success', temp);
}, function (err) {
    console.log('promise error', err);
})

addPromise(3, 'e').then(function (temp) {
    console.log('this should not show up', temp);
}, function (err) {
    console.log('this should appear', err);
})