export default function formatBeforeUpdate(values) {
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
  skills = skills.split(',').filter(item => {
    item = item.trim();
    if (item.length > 1) return item;
  });
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
