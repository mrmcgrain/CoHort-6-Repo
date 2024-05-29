const {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  isMiddleSchoolTeacher,
  notAnElementarySchoolAdministrator,
} = require('./main')

const assert = require('assert');


describe('moreThan5', function () {
  it('returns whether its given number is more than 5', function () {
    assert.strictEqual(moreThan5(3), false);
    assert.strictEqual(moreThan5(5), false);
    assert.strictEqual(moreThan5(8), true);
  });
});

describe('isNewTopScore', function () {
  it('returns whether the first number (the new score) is greater than the second (the old top score)', function () {
    assert.strictEqual(isNewTopScore(5, 15), false);
    assert.strictEqual(isNewTopScore(5, 5), false);
    assert.strictEqual(isNewTopScore(15, 5), true);
  });
});

describe('isInDanger', function () {
  it('returns whether a grade is between 60 and 71, inclusive', function () {
    assert.strictEqual(isInDanger(59), false);
    assert.strictEqual(isInDanger(60), true);
    assert.strictEqual(isInDanger(71), true);
    assert.strictEqual(isInDanger(72), false);
  });
});

describe('isCoasting', function () {
  it('returns whether a grade is between 72 and 83, inclusive', function () {
    assert.strictEqual(isCoasting(71), false);
    assert.strictEqual(isCoasting(72), true);
    assert.strictEqual(isCoasting(83), true);
    assert.strictEqual(isCoasting(84), false);
  });
});

describe('isSucceeding', function () {
  it('returns whether a grade is between 84 and 92, inclusive', function () {
    assert.strictEqual(isSucceeding(83), false);
    assert.strictEqual(isSucceeding(84), true);
    assert.strictEqual(isSucceeding(92), true);
    assert.strictEqual(isSucceeding(93), false);
  });
});

describe('isFailing', function () {
  it('returns whether a grade is below 60', function () {
    assert.strictEqual(isFailing(59), true);
    assert.strictEqual(isFailing(60), false);
    assert.strictEqual(isFailing(93), false);
  });
});

describe('isAcing', function () {
  it('returns whether a grade is above 92', function () {
    assert.strictEqual(isAcing(91), false);
    assert.strictEqual(isAcing(92), false);
    assert.strictEqual(isAcing(93), true);
  });
});

describe('isStudent', function () {
  it('returns whether the given string is `student`', function () {
    assert.strictEqual(isStudent('student'), true);
    assert.strictEqual(isStudent('studnt'), false);
    assert.strictEqual(isStudent('students are awesome'), false);
    assert.strictEqual(isStudent('teacher'), false);
  });
});

describe('isTeacher', function () {
  it('returns whether the given string is `teacher`', function () {
    assert.strictEqual(isTeacher('student'), false);
    assert.strictEqual(isTeacher('tchr'), false);
    assert.strictEqual(isTeacher('teachers are even better'), false);
    assert.strictEqual(isTeacher('teacher'), true);
  });
});

describe('isAdmin', function () {
  it('returns whether the given string is `admin`', function () {
    assert.strictEqual(isAdmin('student'), false);
    assert.strictEqual(isAdmin('admn'), false);
    assert.strictEqual(isAdmin('admin is hard'), false);
    assert.strictEqual(isAdmin('admin'), true);
  });
});

describe('isElementary', function () {
  it('returns whether the given string is `elementary`', function () {
    assert.strictEqual(isElementary('elementary'), true);
    assert.strictEqual(isElementary('college'), false);
    assert.strictEqual(isElementary('lmnty'), false);
    assert.strictEqual(isElementary('elementary my dear watson'), false);
  });
});

describe('areDifferentPeople', function () {
  it('returns whether two names are different or not', function () {
    assert.strictEqual(areDifferentPeople('kyle', 'moop'), true);
    assert.strictEqual(areDifferentPeople('kyle', 'jas'), true);
    assert.strictEqual(areDifferentPeople('kyle', 'kile'), true);
    assert.strictEqual(areDifferentPeople('kyle', 'kyle is such a doll'), true);
    assert.strictEqual(areDifferentPeople('kyle', 'kyle'), false);
  });
});

describe('isMiddleSchoolTeacher', function () {
  it('returns whether the first parameter is the string `teacher` AND the second parameter is a number from 6-8 inclusive', function () {
    assert.strictEqual(isMiddleSchoolTeacher('admin', 12), false);
    assert.strictEqual(isMiddleSchoolTeacher('admin', 7), false);
    assert.strictEqual(isMiddleSchoolTeacher('student', 7), false);
    assert.strictEqual(isMiddleSchoolTeacher('teacher', 5), false);
    assert.strictEqual(isMiddleSchoolTeacher('teacher', 6), true);
    assert.strictEqual(isMiddleSchoolTeacher('teacher', 7), true);
    assert.strictEqual(isMiddleSchoolTeacher('teacher', 8), true);
    assert.strictEqual(isMiddleSchoolTeacher('teacher', 9), false);
  });
});

describe('notAnElementarySchoolAdministrator', function () {
  it('returns whether the first given string is NOT `elementary` OR the second given string is NOT `admin`', function () {
    assert.strictEqual(notAnElementarySchoolAdministrator('elementary', 'admin'), false);
    assert.strictEqual(notAnElementarySchoolAdministrator('college', 'guidance counselor'), true);
    assert.strictEqual(notAnElementarySchoolAdministrator('elementary', 'teacher'), true);
    assert.strictEqual(notAnElementarySchoolAdministrator('pre-k', 'admin'), true);
  });
});
