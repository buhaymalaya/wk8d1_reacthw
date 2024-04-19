export default function DirectorPage({ formData }) {
  return (
    <div>
      <h1>Director Information</h1>
      <p>Username: {formData.username}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}
