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
    linkedIn
  } = values;
  skills = skills.split(',').map(item => item.trim());
  const data = {
    name,
    email,
    phone,
    location,
    skills,
    bio,
    connection: { facebook, twitter, github, linkedIn }
  };

  return data;
}

export function formatLocalUser(user) {
  let { name: fullname, email, phone, location, skills, bio, connection, avatar } = user || '';

  const facebook = !connection ? '' : connection.facebook,
    twitter = !connection ? '' : connection.twitter,
    github = !connection ? '' : connection.github,
    linkedIn = !connection ? '' : connection.linkedIn;

  skills = !skills ? '' : skills.join(', ');
  return { fullname, email, phone, location, skills, bio, facebook, twitter, github, linkedIn, avatar };
}
