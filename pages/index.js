import React from 'react';
import Link from 'next/link';
import Form from 'components/Form/Form';
import Button from 'components/Button/Button';

export default function Home() {
  return (
    <div>

        <Link href="/categories">
            <a>Categories</a>
        </Link>

      <Form>
        <Button />
      </Form>
    </div>
  );
}
