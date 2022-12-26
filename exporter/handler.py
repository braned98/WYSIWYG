import pdfkit
import json

def document_to_pdf(data):
    html = "<meta charset='utf-8' />\n"

    editor = json.loads(data['content'])

    editor_content = editor[0]

    print(editor)

    for editor_content in editor:
        for item in editor_content['children']:
            print(item)
            if 'text' in item:
                if item['text'] != '':
                    html += '<span>'
                    if 'bold' in item:
                        html += '<strong>'
                    if 'italic' in item:
                        html += '<em>'
                    if 'underline' in item:
                        html += '<u>'
                    
                    html += item['text']

                    if 'bold' in item:
                        html += '</strong>'
                    if 'italic' in item:
                        html += '</em>'
                    if 'underline' in item:
                        html += '</u>'

                    html += '</span>'

                    print(html)
                else:
                    html += '<br>'


    #pdfkit.from_string(html, 'test.pdf');
    


    return pdfkit.from_string(html, False, options={'quiet': ''})