import { useState } from 'react';
import dynamic from 'next/dynamic';
// Components
import { CustomLabel } from "@/components/forms";

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }, { color: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link'],
        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
    'header',
    'font',
    'size',
    'color',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
];

export const EditorLang = () => {
    const [content, setContent] = useState('');

    return (
        <div className="col-span-12 sm:col-span-12 lg:col-span-6">
            <div className="h-[94vw] sm:h-80 gap-x-16 gap-y-10 border-2">
                <div className="inputCoverAd relative space-y-1 px-5 pt-10 pb-10">
                    <QuillNoSSRWrapper modules={modules} formats={formats} onChange={setContent} theme="snow" className='h-40 sm:h-48' />
                    <div className="absolute -top-5 w-fit bg-white px-2 py-1 text-xl font-black uppercase text-customShadow">
                        es
                    </div>
                </div>
            </div>
        </div>
    )
}