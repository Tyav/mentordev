export function formatBeforeUpdate(values) {
  let {
    fullname: name,
    email,
    phone,
    location,
    skills,
    bio,
    facebook,
    twitter,
    github,
    linkedin
  } = values;
  skills = skills ? trimSkills(skills) : [];
  const data = {
    name,
    email,
    phone,
    location,
    skills,
    bio,
    connection: { facebook, twitter, github, linkedin }
  };
  return data;
}

export function formatLocalUser(user) {
  let { name: fullname, email, phone, location, skills, bio, connection, avatar, id } = user || '';

  const facebook = !connection ? '' : connection.facebook,
    twitter = !connection ? '' : connection.twitter,
    github = !connection ? '' : connection.github,
    linkedin = !connection ? '' : connection.linkedin;

  skills = skills.length === 0 ? '' : skills.join(', ');
  return {
    id,
    fullname,
    email,
    phone,
    location,
    skills,
    bio,
    facebook,
    twitter,
    github,
    linkedin,
    avatar
  };
}

function trimSkills(arr) {
  arr = arr.split(',');
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i].trim();
    if (item) result.push(item);
  }
  return result;
}
