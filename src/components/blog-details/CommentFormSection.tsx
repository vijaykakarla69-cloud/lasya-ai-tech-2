'use client';

import Link from "next/link"
import User from "@/public/assets/icons/user.svg"
import Icon from "@/public/assets/icons/icon.svg"

export default function CommentFormSection({ blogData }: { blogData: any }) {
    return (
        <section data-kte="kt-28753" className="kt-28753 comment-form">
            <div data-kte="kt-19832" className="kt-19832 container">
                <div data-kte="kt-59134" className="kt-59134 row">
                    <div data-kte="kt-22678" className="kt-22678 col-md-8 mx-auto">
                        <div data-kte="kt-24741" className="kt-24741 row">
                            <div data-kte="kt-44520" className="kt-44520 col-md-6 col-lg-4">
                                <div data-kte="kt-34503" className="kt-34503 input-group d-flex align-items-center">
                                    <div data-kte="kt-88780" className="kt-88780 icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                                        <User />
                                    </div>
                                    <input type="text" data-kte="kt-47749" className="kt-47749 form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder={blogData.comment?.form1?.[0]?.placeholder_name || 'Your Name'} aria-label="username" />
                                </div>
                            </div>
                            {/* ... rest of the form fields ... */}
                            <div data-kte="kt-65850" className="kt-65850 col-12">
                                <Link href={blogData.send_button?.[0]?.link || '#'} passHref>
                                    <button type="button" data-kte="kt-58215" className="kt-58215 btn btn-primary mt-3">
                                        {blogData.send_button?.[0]?.text || 'Send Message'}
                                        <Icon />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}