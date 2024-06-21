'use client';

import Link from 'next/link';
import { DotsVerticalIcon } from '@radix-ui/react-icons';
import { SquareArrowOutUpRight } from 'lucide-react';

import { WebNavigationListRow } from '@/lib/data';

import BaseImage from '../image/BaseImage';

export default function WebNavCard({ name, thumbnailUrl, title, url, content }: WebNavigationListRow) {
  const handlerEditCard = () => {
    console.log('edit card', name);
    // TODO modal
  };
  return (
    <div className='hover group relative flex flex-col gap-3 rounded-[12px] bg-[#2C2D36] p-2 lg:p-5'>
      <div className='more-actions absolute right-2 top-1  hidden group-hover:flex' onClick={handlerEditCard}>
        <DotsVerticalIcon className='size-5 cursor-pointer' />
      </div>
      <Link href={`/ai/${name}`} title={title}>
        <BaseImage
          width={278}
          height={156}
          src={thumbnailUrl || ''}
          alt={title}
          title={title}
          className='aspect-[278/156] rounded-[8px] bg-white/40 hover:opacity-70'
        />
      </Link>
      <div className='flex items-center justify-between'>
        <a href={url} title={title} target='_blank' rel='noreferrer' className='hover:opacity-70'>
          <h3 className='line-clamp-1 flex-1 text-sm font-bold lg:text-base'>{title}</h3>
        </a>
        <a href={url} title={title} target='_blank' rel='noreferrer' className='hover:opacity-70'>
          <SquareArrowOutUpRight className='size-5' />
          <span className='sr-only'>{title}</span>
        </a>
      </div>
      <p className='line-clamp-5 text-xs text-white/70 lg:text-sm'>{content}</p>
    </div>
  );
}
