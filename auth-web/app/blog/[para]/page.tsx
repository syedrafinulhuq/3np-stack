'use client';
import { useParams } from 'next/navigation';

export default function BlogPost() {
  const params = useParams<{ para: string }>();
  const para = params?.para;

  return (
    <div>
      <h1>Blog Post: {para}</h1>
      <p>This is a dynamic route</p>
    </div>
  );
}
