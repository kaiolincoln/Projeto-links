

interface SocialProps {
  url: string;
  children: any; // Menos seguro, mas funciona
}


export function Social({url, children}: SocialProps){
    return(
        <a href={url} rel="noopener noreferrer" target="_blank">
            {children}
        </a>
    )
}
