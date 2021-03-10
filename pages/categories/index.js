import React from 'react';
import Link from 'next/link';


export default function Categories() {
    return (
        <div>
            <div className="categories">
                <ul>
                    <li>
                        <Link href="/categories/[slug]" as="/categories/wordpress">
                            <a>Wordpress</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/categories/[slug]" as="/categories/magento">
                            <a>Magento</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/categories/[slug]" as="/categories/drupal">
                            <a>Drupal</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/categories/[slug]" as="/categories/shopify">
                            <a>Shopify</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
