// Зробити свій розпоряжок дня.
//
// Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
// Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
// Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не успішне виконання.
// Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//
// Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави - Працюєте -
// Поїхали до дому - Повчились - Лягли спати.
//
// Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант, що при виконанні функції доїхати
// на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви забули гаманець і лишились голодні.
//======================================================================
//Callbacks

function wakeUp(isDecidedToGetUp, cb) {
    setTimeout(() => {
        if (isDecidedToGetUp) {
            cb(null, 'I waked up.');
        }
        else {
            cb('I decided to sleep... z-z-z...', null);
        }
    },300);
}

function washUp(isWater, cb) {
    setTimeout(() => {
        if (isWater) {
            cb(null, 'I washed up.');
        }
        else {
            cb('Cut off the water...', null);
        }
    },200);
}

function doExercises(isHurry, cb) {
    setTimeout(() => {
        if (isHurry) {
            cb(null, 'I did exercises.');
        }
        else {
            cb('I very hurry...', null);
        }
    },400);
}

function breakfast(isFood, cb) {
    setTimeout(() => {
        if (isFood) {
            cb(null, 'I ate.');
        }
        else {
            cb('I forgot to buy food...', null);
        }
    },600);
}

function getDress(isClothesDry, cb) {
    setTimeout(() => {
        if (isClothesDry) {
            cb(null, 'I got dressed.');
        }
        else {
            cb('Clothes are not dry...', null);
        }
    },500);
}

function goWork(isRoadCongestion, cb) {
    setTimeout(() => {
        if (isRoadCongestion) {
            cb(null, 'I came to the work.');
        }
        else {
            cb('I\'m in road congestion ...', null);
        }
    },700);
}

function makeWork(isGotFired, cb) {
    setTimeout(() => {
        if (isGotFired) {
            cb(null, 'I am working.');
        }
        else {
            cb('I was fired...', null);
        }
    },200);
}

function dinner(isMoney, cb) {
    setTimeout(() => {
        if (isMoney) {
            cb(null, 'I ate.');
        }
        else {
            cb('I forgot money...', null);
        }
    },500);
}

function goHome(isWorkDone, cb) {
    setTimeout(() => {
        if (isWorkDone) {
            cb(null, 'I went home.');
        }
        else {
            cb('I\'m completing a work...', null);
        }
    },300);
}

function goToBed(isInsomnia, cb) {
    setTimeout(() => {
        if (isInsomnia) {
            cb(null, 'I sleep.');
        }
        else {
            cb('I have insomnia...', null);
        }
    },400);
}


wakeUp(true, (err, msg) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(msg);

        washUp(true, (err, msg) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(msg);

                doExercises(true, (err, msg) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(msg);

                        breakfast(true, (err, msg) => {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log(msg);

                                getDress(true, (err, msg) => {
                                    if (err) {
                                        console.log(err);
                                    }
                                    else {
                                        console.log(msg);

                                        goWork(true, (err, msg) => {
                                            if (err) {
                                                console.log(err);
                                            }
                                            else {
                                                console.log(msg);

                                                makeWork(true, (err, msg) => {
                                                    if (err) {
                                                        console.log(err);
                                                    }
                                                    else {
                                                        console.log(msg);

                                                        dinner(true, (err, msg) => {
                                                            if (err) {
                                                                console.log(err);
                                                            }
                                                            else {
                                                                console.log(msg);

                                                                goHome(true, (err, msg) => {
                                                                    if (err) {
                                                                        console.log(err);
                                                                    }
                                                                    else {
                                                                        console.log(msg);

                                                                        goToBed(true, (err, msg) => {
                                                                            if (err) {
                                                                                console.log(err);
                                                                            }
                                                                            else {
                                                                                console.log(msg);

                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });

            }
        });

    }
});

//=============================================================================================================
//Promises

// function wakeUp(isDecidedToGetUp) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isDecidedToGetUp) {
//                 resolve('I waked up.');
//             }
//             else {
//                 reject('I decided to sleep... z-z-z...');
//             }
//         },400);
//     });
// }
//
// function washUp(isWater) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWater) {
//                 resolve('I washed up.');
//             } else {
//                 reject('Cut off the water...');
//             }
//         }, 300);
//     });
// }
//
// function doExercises(isHurry) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if (isHurry) {
//                 resolve('I did exercises.');
//             }
//             else {
//                 reject('I very hurry...');
//             }
//         },600);
//     });
// }
//
// function breakfast(isFood) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if (isFood) {
//                 resolve('I ate.');
//             } else {
//                 reject('I forgot to buy food...');
//             }
//         }, 500);
//     });
// }
//
// function getDress(isClothesDry) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if (isClothesDry) {
//                 resolve( 'I got dressed.');
//             } else {
//                 reject('Clothes are not dry...');
//             }
//         }, 700);
//     });
// }
//
// function goWork(isRoadCongestion) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if (isRoadCongestion) {
//                 resolve( 'I came to the work.');
//             } else {
//                 reject('I\'m in road congestion ...');
//             }
//         }, 300);
//     });
// }
//
// function makeWork(isGotFired) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if (isGotFired) {
//                 resolve( 'I am working.');
//             } else {
//                 reject('I was fired...');
//             }
//         }, 500);
//     });
// }
//
// function dinner(isMoney) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if (isMoney) {
//                 resolve( 'I ate.');
//             } else {
//                 reject('I forgot money...');
//             }
//         }, 200);
//     });
// }
//
// function goHome(isWorkDone) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if (isWorkDone) {
//                 resolve( 'I went home.');
//             } else {
//                 reject('I\'m completing a work...');
//             }
//         }, 600);
//     });
// }
//
// function goToBed(isInsomnia) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if (isInsomnia) {
//                 resolve( 'I sleep.');
//             } else {
//                 reject('I have insomnia...');
//             }
//         }, 400);
//     });
// }
//
// //call
// let promise = wakeUp(true);
//     promise
//         .then(val => {
//             console.log(val);
//             return washUp(true);
//         })
//         .then(val => {
//             console.log(val);
//             return doExercises(true);
//         })
//         .then(val => {
//             console.log(val);
//             return breakfast(true);
//         })
//         .then(val => {
//             console.log(val);
//             return getDress(true);
//         })
//         .then(val => {
//             console.log(val);
//             return goWork(true);
//         })
//         .then(val => {
//             console.log(val);
//             return makeWork(true);
//         })
//         .then(val => {
//             console.log(val);
//             return dinner(true);
//         })
//         .then(val => {
//             console.log(val);
//             return goHome(true);
//         })
//         .then(val => {
//             console.log(val);
//             return goToBed(true);
//         })
//         .then(val => {
//             console.log(val);
//         })
//         .catch(err => console.log(err));

