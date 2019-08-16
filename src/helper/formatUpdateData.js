export function formatBeforeUpdate(values) {
  let {
    fullname,
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
  skills = skills.split(',').filter(item => item.trim().length > 1);
  const data = {
    fullname,
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
  let { name: fullname, email, phone, location, skills, bio, connection } = user;

  const facebook = !connection ? '' : connection.facebook,
    twitter = !connection ? '' : connection.twitter,
    github = !connection ? '' : connection.github,
    linkedIn = !connection ? '' : connection.linkedIn;

  skills = skills.join(', ');
  return { fullname, email, phone, location, skills, bio, facebook, twitter, github, linkedIn };
}
